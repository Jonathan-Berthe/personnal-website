import { useEffect } from 'react/cjs/react.development'
import Layout from '../components/Layout'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import SectionContact from '../components/SectionContact'

export default function Home() {

  // https://stackoverflow.com/questions/1517924/javascript-mapping-touch-events-to-mouse-events
  // Goal: map touch event to mouse events for react-swipeable working on device (to swipe portfolio container)
  function touchHandler(event) {
    var touches = event.changedTouches,
      first = touches[0],
      type = "";
    switch (event.type) {
      case "touchstart": type = "mousedown"; break;
      case "touchmove": type = "mousemove"; break;
      case "touchend": type = "mouseup"; break;
      default: return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //                screenX, screenY, clientX, clientY, ctrlKey, 
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
      first.screenX, first.screenY,
      first.clientX, first.clientY, false,
      false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    //event.preventDefault();
  }

  useEffect(() => {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
  }, [])
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <SectionContact />
    </Layout>
  )
}

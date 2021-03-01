import Layout from '../components/Layout'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import SectionContact from '../components/SectionContact'

export default function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <SectionContact />
    </Layout>
  )
}

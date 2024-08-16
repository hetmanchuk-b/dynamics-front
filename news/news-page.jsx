import Header from "../src/components/header";
import Footer from "../src/components/footer";
import PageHeader from "../src/components/page-header";
import NewsItem from "../src/components/news-item";

export default function NewsPage() {
  return (
    <div>
      <Header isWhite={true} />

      <PageHeader
        title={'News'}
        breadcrumbs={[
          {name: 'Main', url: '/'},
          {name: 'News', url: '/news/'}
        ]}
      />

      <div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

      <Footer />
    </div>
  )
}

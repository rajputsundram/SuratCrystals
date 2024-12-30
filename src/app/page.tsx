
import CarouselComponents from '@/components/CarouselComponents'
import WelcomeSec from '@/components/WelcomeCompon/WelcomeSec'
import ProductCategories from '@/components/ProductCategories/ProductCategories'
import ProductList from '@/components/ProductItems/ProductsList'
import ReviewComp from '@/components/ReviewComp/ReviewCompo'
import Supports from '@/components/shipMents/Shipments'


export default function Home() {
  return (
<>
<CarouselComponents/>
<WelcomeSec/>
<ProductCategories/>
<ProductList/>
<ReviewComp/>
<Supports/>
</>
  );
}

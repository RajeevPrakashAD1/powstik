import React from 'react'
import Footer from '../../../util/components/FooterWhite'
import { Container, ProductContainer } from '../../ProductPage/product.styles';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Container1, FilteredContainer, ProductResults } from './Product.styles';
import Accordian from '../../../util/components/Accordian/Accordian.component';
import FilterBy from '../../../util/FilterBy/FilterBy.component';
import { useEffect } from 'react';
import { Submit } from '../../../configApi/function';

const ProductOverview = () => {
    const [product, setProducts] = React.useState(null);
    const getProduct = async () => {
        const res = await Submit({}, '/products/', 'get');

        setProducts(res.data);
        console.log('product data', res.data);
    };

    const Discountchange = (value, event) => {
        console.log(value)
        if (!event) return;
        console.log(event.target.checked);
    }
    const Pricechange = (value) => {
        console.log(value)
    }
    const Ratingchange = (value) => {
        console.log(value)
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <React.Fragment>

            <Container>
                <ProductContainer >
                    <P1
                        color="#616161"
                        size={21}
                        weight={400}
                        lineHeight={24}
                        style={{ paddingBottom: 18, paddingTop: 20 }}
                    >
                        Home/Products
                    </P1>
                    <P1
                        color="#616161"
                        size={21}
                        weight={400}
                        lineHeight={24}
                        style={{ paddingBottom: 18, paddingTop: 20 }}
                    >
                        Showing 1-12 of the 34 results
                    </P1>
                    <Container1>
                        <FilteredContainer>
                            <Accordian Title={"Mothers&Child"} />
                            <Accordian Title={"Diabetes"} />
                            <Accordian Title={"Geriatrics"} />
                            <Accordian Title={"Organic"} />
                            <Accordian Title={"Neutraceuticals"} />
                            <Accordian Title={"Plant Based Foods"} />
                            <P1 color='rgba(139, 195, 74, 1)' size={18} weight={400} style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>Discount</P1>
                            <FilterBy checktitle={"70% more"} Discountchange={Discountchange.bind(null, 70)} />
                            <FilterBy checktitle={"60% more"} Discountchange={Discountchange.bind(null, 60)} />
                            <FilterBy checktitle={"50% more"} Discountchange={Discountchange.bind(null, 50)} />
                            <FilterBy checktitle={"40% more"} Discountchange={Discountchange.bind(null, 40)} />
                            <FilterBy checktitle={"30% more"} Discountchange={Discountchange.bind(null, 30)} />
                            <FilterBy checktitle={"20% more"} Discountchange={Discountchange.bind(null, 20)} />
                            <FilterBy checktitle={"10% more"} Discountchange={Discountchange.bind(null, 10)} />
                            <P1 color='rgba(139, 195, 74, 1)' size={18} weight={400} style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>Price</P1>
                            <FilterBy checktitle={"500 & more"} Pricechange={Pricechange.bind(null, 500)} />
                            <FilterBy checktitle={"400 & more"} Pricechange={Pricechange.bind(null, 400)} />
                            <FilterBy checktitle={"300 & more"} Pricechange={Pricechange.bind(null, 300)} />
                            <FilterBy checktitle={"200 & more"} Pricechange={Pricechange.bind(null, 200)} />
                            <FilterBy checktitle={"100 & more"} Pricechange={Pricechange.bind(null, 100)} />
                            <P1 color='rgba(139, 195, 74, 1)' size={18} weight={400} style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>Rating</P1>
                            <FilterBy checktitle={"4.5 stars"} Ratingchange={Ratingchange.bind(null, 4.5)} />
                            <FilterBy checktitle={"4.4 stars"} Ratingchange={Ratingchange.bind(null, 4.4)} />
                            <FilterBy checktitle={"4.3 stars"} Ratingchange={Ratingchange.bind(null, 4.3)} />
                            <FilterBy checktitle={"4.2 stars"} Ratingchange={Ratingchange.bind(null, 4.2)} />
                            <FilterBy checktitle={"4.1 stars"} Ratingchange={Ratingchange.bind(null, 4.1)} />
                        </FilteredContainer>
                        <ProductResults>
                            {product && product.map((product, index) => {
                                return (
                                    <div></div>
                                )
                            })
                            }
                        </ProductResults>
                    </Container1>
                </ProductContainer>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default ProductOverview
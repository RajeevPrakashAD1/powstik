import React from 'react'
import { FilterByContainer, CheckboxContainer } from './FilterBy.styles'
import { P1 } from '../StyledComponent/premadeComponent'
const FilterBy = ({ checktitle, Discountchange, Pricechange, Ratingchange }) => {
    return (
        <FilterByContainer>
            <CheckboxContainer style={{ marginLeft: 15 }}>
                <input type={"checkbox"} style={{ accentColor: "rgba(139, 195, 74, 1)", marginRight: 5 }} onChange={Discountchange || Ratingchange || Pricechange} />
                <P1 color="#616161" weight={400} size={16}>{checktitle}</P1>
            </CheckboxContainer>
        </FilterByContainer>
    )
}

export default FilterBy;
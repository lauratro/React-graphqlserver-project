import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import {useQuery, gql} from "@apollo/client"

import { Link } from "react-router-dom"

const CATEGORY_QUERY = gql`
{
    categories{
        id
        category
        image
        slug
    }
}
`

function CategoryDisplay() {
    

    const { loading, error, data } = useQuery(CATEGORY_QUERY)
    
    if (error) return <div>There is an error in category</div>
    if (loading) return <div> is Loading </div>

    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map(category => {
                    return (
                        <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container">
                            <div className="CategoryDisplay-card">
                                <img src={animals[category.image]} /> 
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default CategoryDisplay

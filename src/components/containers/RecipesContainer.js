import { Center, Container } from 'native-base'
import React, { useState, useEffect } from 'react'
import Form from '../forms/Form'
import Loading from '../layout/Loading'
import RecipesList from '../lists/RecipesList'
import { getRecipes } from '../services/api'

const OUR_RECIPES = [
  {
    image: 'https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg',
    label: 'Roast sirloin of beef',
    source: 'BBC Good Food',
    url: 'http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef'
  },
  {
    image: 'https://www.edamam.com/web-img/ad3/ad35ae4c847dcd39bad104838007f84a.jpg',
    label: 'Beef Tea',
    source: 'Epicurious',
    url: 'https://www.epicurious.com/recipes/food/views/beef-tea-395253'
  },
  {
    image: 'https://www.edamam.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3.jpg',
    label: 'Beef Tacos',
    source: 'No Recipes',
    url: 'http://norecipes.com/blog/2009/05/28/beef-tacos-recipe/'
  },
  {
    image: 'https://www.edamam.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg',
    label: 'Beef Brisket',
    source: 'Simply Recipes',
    url: 'http://simplyrecipes.com/recipes/beef_brisket/'
  },
  {
    image: 'https://www.edamam.com/web-img/b64/b64005809d54d818e6ded326347b07c8.jpg',
    label: 'Barbecued Beef Brisket',
    source: 'Saveur',
    url: 'http://www.saveur.com/article/Recipes/Barbecued-Beef-Brisket'
  },
  {
    image: 'https://www.edamam.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2.JPG',
    label: 'Portabello Beef Stew',
    source: 'Food52',
    url: 'https://food52.com/recipes/14484-portabello-beef-stew'
  },
  {
    image: 'https://www.edamam.com/web-img/c60/c60e420c3450c7eccd833271153f896e.jpg',
    label: 'Pioneer Woman’s Beef Brisket',
    source: 'Pioneer Woman',
    url: 'http://thepioneerwoman.com/cooking/2007/06/brisket_baby/'
  },
  {
    image: 'https://www.edamam.com/web-img/229/2292adfebf71a994fc515cd5895012fe.jpg',
    label: 'Beef Goulash',
    source: 'Martha Stewart',
    url: 'http://www.marthastewart.com/350032/beef-goulash'
  },
  {
    image: 'https://www.edamam.com/web-img/501/501a9b12d18f5cbcaad0d00263ec2f7b.jpg',
    label: 'Beef stew',
    source: 'Jamie Oliver',
    url: 'http://www.jamieoliver.com/recipes/beef-recipes/beef-stew/'
  },
  {
    image: 'https://www.edamam.com/web-img/cd3/cd3674a92bbb3797632a65e2df7bd7f7',
    label: 'Beef and Noodles recipes',
    source: 'Chez Us',
    url: 'http://www.chezus.com/2009/04/04/beef-and-noodles/'
  }
]

const RecipesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [ingredient, setIngredient] = useState(null)

  const fetchRecipes = () => {
    setIsLoading(true)
    setRecipes(OUR_RECIPES)
    setIsLoading(false)

    // getRecipes(ingredient).then(
    //   recipes => {
    //     setRecipes(recipes)
    //     setIsLoading(false)
    //     console.log(recipes)
    //   },
    //   error => {
    //     alert('Error', `Something went wrong! ${error}`)
    //   }
    // )
  }

  // console.log('recipes', recipes)

  const handleInputChange = ingredient => {
    setIngredient(ingredient)
  }

  return (
    <Container px={4}>
      <Center px={4}>
        <Form onInputChange={handleInputChange} fetchRecipes={fetchRecipes} />
        {isLoading ? <Loading /> : <RecipesList navigation={navigation} recipes={recipes} />}
      </Center>
    </Container>
  )
}

export default RecipesContainer

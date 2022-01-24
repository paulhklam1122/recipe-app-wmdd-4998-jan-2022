import { FlatList } from 'native-base'
import React from 'react'
import RecipeCard from '../lisItems/RecipeCard'

const RecipesList = props => {
  const { navigation, recipes } = props

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard
          image={item.image}
          label={item.label}
          navigation={navigation}
          source={item.source}
          url={item.url}
        />
      )}
      keyExtractor={item => item.url}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default RecipesList

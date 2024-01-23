import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/home'
import { NewMeal } from '@screens/newMeal'
import { Feedback } from '@screens/feedback'
import { Statistic } from '@screens/statistic'
import { MealDetails } from '@screens/mealDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
            <Screen name="home" component={Home} />
            <Screen name="statistic" component={Statistic} />
            <Screen name="new" component={NewMeal} />
            <Screen name="meal" component={MealDetails} />
            <Screen name="feedback" component={Feedback} />
        </Navigator>
    )
}

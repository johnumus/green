# Green
`react-native`

- **Design:** [Green Mobile app] on dribbble.com
- **Designer:** [Anastasia Marinicheva]

[Green Mobile app]: https://dribbble.com/shots/6930348-Green-Mobile-App
[Anastasia Marinicheva]: https://dribbble.com/anmarinicheva

---

<p align='middle'>
  <img src="https://imgur.com/P2kjZT6.png" width="300" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://imgur.com/7S8FQwe.png" width="300" /> 
</p>
<p align='middle'>
  <img src="https://imgur.com/lvulPVX.png" width="300" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://imgur.com/y4ijCoA.png" width="300" /> 
</p>


## File structure
- [assets]
    - [fonts]
    - [icons]
    - [images]
- [components]
    - [TextBlock.js] - _easy-to-use interface for `<Text>` component_
    - [ViewBlock.js] - _easy-to-use interface for `<View>` component_
- [constants] - _theming, static data for testing, .._
- [navigation]
    - [AppNavigator.js] - _React navigation configuration_
    - [MainStackNavigator.js] - _React navigation stack_
- [screens]
    - [Welcome.js] - _Home screen_
    - [Forgot.js] - _Forgot screen_ (just a placeholder, nothing in here)
    - [Register.js] - _Register screen_
    - [Products.js] - _Products screen_

[assets]: ./assets
[fonts]: ./assets/fonts
[icons]: ./assets/icons
[images]: ./assets/images

[components]: ./components
[TextBlock.js]: ./components/TextBlock.js
[ViewBlock.js]: ./components/ViewBlock.js

[constants]: ./constants

[navigation]: ./navigation
[AppNavigator.js]: ./navigation/AppNavigator.js
[MainStackNavigator.js]: ./navigation/MainStackNavigator.js

[screens]: ./screens
[Welcome.js]: ./screens/Welcome.js
[Forgot.js]: ./screens/Forgot.js
[Register.js]: ./screens/Register.js
[Products.js]: ./screens/Products.js

## Todo
- [ ] password show/hide

## Fixme
### KeyboardAvoidingView
- `` use align self for button in welcome

### - screens/Products.js
- `<ScrollView>` with `horizontal` for products.


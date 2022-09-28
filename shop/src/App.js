import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems : [],
      orders: [],
      items : [ 
        {
          id: 1 ,
          title : 'Tafel',
          img : 'eettafel.jpg',
          desc : 'Gemaakt van de rode hout',
          category: 'tebles',
          price: '36.66',
        },
        {
          id: 2 ,
          title : 'Bureau ',
          img : 'bureaustoel.jpg',
          desc : 'Unike bereau voor gammers , proficionile programurs',
          category: 'stoel',
          price: '159.99',
        },
        {
          id: 3 ,
          title : 'Schilderij herfst',
          img : 'schilderij.png',
          desc : 'Gemaakt van de rode hout',
          category: 'schilderij',
          price: '66.00',
        },
        {
          id: 4 ,
          title : 'Bed',
          img : 'bed.jpg',
          desc : 'Gemaakt van de rode hout',
          category: 'bed',
          price: '45',
        }
       
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render () {
      return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

          {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}  />}
          <Footer />
        </div>
      );
    }

    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem })
    }

    chooseCategory(category) {
      if( category === 'all' ) {
        this.setState({currentItems : this.state.items})
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }
    deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
    addToOrder(item) {
      let isInArray = false
      this.state.orders.forEach(el => {
        if(el.id === item.id)
        isInArray = true
      })
      if(!isInArray)
      this.setState({orders: [...this.state.orders , item]})
    }
  }


export default App;

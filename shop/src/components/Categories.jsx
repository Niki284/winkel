import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
          categories : [ 
            {
                key : 'all',
                name : 'alles',
            },
            {
              key : 'tebles',
              name: 'Tafel',
              price: '36.66',
            },
            {
              key :'stoel' ,
              name: 'Bureau',
              price: '159.99',
            },
            {
              key : 'schilderij',
              name: 'Schilderij herfst',
              price: '66.00',
            },
            {
              key : 'bed',
              name: 'Bed',
              price: '45',
            }
           
          ]
        }
      }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}   > {el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
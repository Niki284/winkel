import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img} onClick={()=> this.props.onShowItem(this.props.item)} alt="" />
            <h2>
                {this.props.item.title}
            </h2>
            <p>
                {this.props.item.desc}
            </p>
            <price>{this.props.item.price}$</price>
            <div className="add-to-card" onClick={()=> this.props.onAdd(this.props.item)}>+</div>
        </div>
    )
  }
}

export default Item
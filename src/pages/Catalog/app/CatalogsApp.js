import { Component } from "react";
import axios from "axios";
import TestImg from "../testImg/testImg";
import AppInputImg from "../app-inputImg/AppInputImg";


class CatalogsApp extends Component {
  state = {
    products: [],
    imgSrc: "",
    colors: []
  }

  

  componentDidMount() {
    this.getData();
  }
 
  setColors = (color) => {
    return this.setState(({colors}) => ({
        colors: [...colors, color]
    }))
  }

  getData = () => {
    axios.get("http://localhost:4000/products")
      .then(res => {
        this.setState(({ products }) => {
          return {
            products:  res.data
          }
        })
      }).catch((e) => console.log(e));
  }


  getImgSrc = (imgSrc) => {
    this.setState(({imgSrc: imgSrc}));
  }

 
  render() {
    const { products } = this.state;
    let res = products.map(item => {
      return (
        <div key={item.id}>
          <TestImg getUrl={item.image} setColors={this.setColors} />
        </div>
      );
    });
    return (
      <div>
        <AppInputImg getImgSrc={this.getImgSrc} />
        <TestImg getUrl={this.state.imgSrc} setColors={this.setColors} />
        {res}
      </div>
    );
  }
}

export default CatalogsApp 
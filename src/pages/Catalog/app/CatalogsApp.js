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
    return this.setState(({ colors }) => ({
      colors: [...colors, color]
    }))
  }

  getData = () => {
    axios.get("http://localhost:4000/products")
      .then(res => {
        this.setState(({ products }) => {
          return {
            products: res.data
          }
        })
      }).catch((e) => console.log(e));
  }

  compareSameColors = () => {

    if (this.state.colors.length === 11) {
      const compareColors = this.state.colors[10];

      this.state.colors.map((color, j) => {
        if (j !== 10) {
          for (let k = 0; k < compareColors.length; k++) {
            for (let i = 0; i < color.length; i++) {

              let currentColor = color[i];
              let currentComapreColors = compareColors[k];
              // console.log(currentComapreColors, color);
              if ((currentComapreColors[1] === currentColor[1] && currentComapreColors[2] === currentColor[2]) ||
                (currentComapreColors[3] === currentColor[3] && currentComapreColors[4] === currentColor[4]) || 
                (currentComapreColors[5] === currentColor[5] && currentComapreColors[6] === currentColor[6])) {
                console.log(currentComapreColors, currentColor, color);
                return color;
              }
            }
          }
        }
      })
    

    }
  
  }

  getImgSrc = (imgSrc) => {
    this.setState(({ imgSrc: imgSrc }));
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
        {this.compareSameColors()}
        {res}
      </div>
    );
  }
}

export default CatalogsApp 
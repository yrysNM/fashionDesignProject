import { Component } from "react";
import { ColorExtractor } from "react-color-extractor";

class CatalogsApp extends Component {
    state = {
        colors: [],
    } 

    renderSwatches = () => {
        const {colors} = this.state;

        return colors.map((color, id) => {
            return(
                <div key={id} style={{backgroundColor: color, width: 100, height: 100}} />

            );
        });
    }

    getColors = colors => {
        this.setState(state => ({
            colors: [...state.colors, ...colors]
        }))

    }
    render() {
        return(
            <div>
            <ColorExtractor getColors={this.getColors}>
              <img
                src="https://i.pinimg.com/736x/cc/3b/77/cc3b770949eb3c8216a3e8d4c43e71c5.jpg"
                style={{ objectFit: "cover" }}
              alt="test img"/>
            </ColorExtractor>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {this.renderSwatches()}
            </div>
          </div>
        );
    }
}   

export default CatalogsApp 
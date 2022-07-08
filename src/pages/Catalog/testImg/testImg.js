import { Component } from "react";
import { ColorExtractor } from "react-color-extractor";

class TestImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [],
        };
    }

    renderSwatches = () => {
        const { colors } = this.state;

        return colors.map((color, id) => {
            return (
                <div key={id} style={{ backgroundColor: color, width: 100, height: 100 }} />

            );
        });
    }
    
    
    getColors = colors => {
        this.setState(state => ({
            colors: [...state.colors, ...colors]
        }))
        this.props.setColors(colors);

    }

    
    render() {
        
       
        return (
            <div>
                <ColorExtractor getColors={this.getColors}>

                    <img
                        src={this.props.getUrl}
                        style={{ objectFit: "cover" }}
                        alt="test img" />
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

export default TestImg; 
import { Component } from "react";

class CompareColors extends Component {

    state = {
        sameColors: [],
    };

    compareSameColors = (colorRes = new Set()) => {

        if (this.props.colors.length === 11) {
          const compareColors = this.props.colors[10];
    
          for(let j = 0; j < this.props.colors.length; j++){
            let color = this.props.colors[j];
            if (j !== 10) {
              for (let k = 0; k < compareColors.length; k++) {
                for (let i = 0; i < color.length; i++) {
    
                  let currentColor = color[i];
                  let currentComapreColors = compareColors[k];
                  // console.log(currentComapreColors, color);
                  if ((currentComapreColors[1] === currentColor[1] && currentComapreColors[2] === currentColor[2]) ||
                    (currentComapreColors[3] === currentColor[3] && currentComapreColors[4] === currentColor[4]) ||
                    (currentComapreColors[5] === currentColor[5] && currentComapreColors[6] === currentColor[6])) {
                    // console.log(currentComapreColors, currentColor, color);
                      // this.setState(({comapreColors}) => {
                      //   return {
                      //     comapreColors: [...comapreColors, color] 
                      //   }
                      // });
                      colorRes.add(color);
                  }
                }
              }
            }
          };
        }
    
        return Array.from(colorRes);
      }

    render() {
        console.log(this.compareSameColors());
        return (
            <div>
                
            </div>
        );
    }
}

export default CompareColors;
import Component from '@biotope/element';
import CounterButton from './index';
import MY_BUTTON_EVENTS from "./events";
import { wire } from 'hyperhtml';

  // private addOne() {
  //   let prevState:number = this.state.value;
  //   this.setState({
  //     value: prevState++
  //   });
  // };

  // private removeOne() {
  //   let prevState:number = this.state.value;
  //   this.setState({
  //     value: prevState--
  //   });
  // }

  
class Counter extends Component {
  static dependencies = [CounterButton as typeof Component];

  public static componentName = 'counter-wrapper';

  constructor() {
    super();
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  get defaultState() {
    return {
      counter: 0
    }
  }

  private buttonPressed() {
    console.log("the button was pressed");
  }

  render() {
    return (
      this.html`
      <h2>${this.state.counter}</h2>
      <counter-button onpressed=${this.buttonPressed} type="bt2n" title="Lorem asIpsum" add="true" disable="false"><counter-button/>`
    )
  }
}

Counter.register();
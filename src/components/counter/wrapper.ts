import Component from '@biotope/element';
import CounterButton from './counter';

class Counter extends Component {
  static dependencies = [CounterButton as typeof Component];

  public static componentName = 'counter-wrapper';

  constructor() {
    super();
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  get defaultState() {
    return {
      counter: 0,
      disabled: false
    }
  }

  private buttonPressed(e) {
    let prevCounter:number = this.state.counter;
    if (e.target.add) {
      this.setState({
        counter: prevCounter += 1
      });
    } else {
      this.setState({
        counter: prevCounter -= 1
      });
    }

  }

  render() {
    return (
      this.html`
        <h2>${this.state.counter}</h2>
        <counter-button onpressed=${(e) => this.buttonPressed(e)} type="btn" title="ADD" add="true"></counter-button>
        <counter-button onpressed=${(e) => this.buttonPressed(e)} type="btn" title="REMOVE" remove="true"></counter-button>`
    )
  }
}

Counter.register();
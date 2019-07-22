import Component from '@biotope/element';
import template from './template';

  interface CounterButtonProps {
    add?: boolean;
    remove?: boolean;
    btnText: string;
    type: 'btn';
  }

interface counterButtonState {
  value?: number;
}

class Counter extends Component< CounterButtonProps, counterButtonState > {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  public static componentName = 'counter-button';

  get defaultState() {
    return {
      value: 0
    }
  }

  protected static attributes = [
    { name: 'example', converter: (value) => value != null },
    'type',
    'btn-href'
  ];

  protected get defaultProps(): CounterButtonProps {
    return {
      btnText: 'Example Button',
      type: 'btn'
    }
  }

  private addOne() {
    let prevState:number = this.state.value;
    this.setState({
      value: prevState++
    });
  };

  private removeOne() {
    let prevState:number = this.state.value;
    this.setState({
      value: prevState--
    });
  }

  private get button(): HTMLElement {
    return this.shadowRoot.querySelector('.x-button__btn');
  }

  public connectedCallback() {
    this.addEventListener('click', this.onClick);
  }

  public disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }

  private onClick() {
    this.emit('click');
  }

  render() {
    return template(this.html, {
      value: this.state.value,
      add: true,
      remove: false,
      btnText: this.props.btnText,
      disabled: false,
      type: 'btn'
    });
  }
}

Counter.register();

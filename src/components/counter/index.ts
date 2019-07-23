import Component from '@biotope/element';
import MY_BUTTON_EVENTS from './events';
import { wire } from 'hyperhtml';
import classNames from 'classnames';

  interface CounterButtonProps {
    add?: boolean;
    remove?: boolean;
    title?: string;
    type: string;
  }

  interface CounterButtonState {
    disabled: boolean;
  }

export default class CounterButton extends Component< CounterButtonProps, CounterButtonState > {
  
  public static componentName = 'counter-button';
  protected static attributes = [
    'title',
    'add',
    'remove'
  ];

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  protected get defaultProps(): CounterButtonProps {
    return {
      type: 'btn'
    }
  }

  get defaultState(): CounterButtonState {
    return {
      disabled: false
    }
  }

  public connectedCallback() {
    this.addEventListener('click', this.onClick);
  }

  public disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }

  private onClick() {
    this.emit(MY_BUTTON_EVENTS.PRESSED);
  }
  
  renderButton = (title:string, add:boolean, remove:boolean) => {
    const btnClass = classNames('counter-button__btn ', {
      ['counter-button__btn--add']: add,
      ['counter-button__btn--remove']: remove,
    });

    return wire()`<button type="${this.props.type}" class="${btnClass}" disabled="${this.state.disabled}">${title}</button>`
  };

  render() {
    return this.html`${this.renderButton(this.props.title, this.props.add, this.props.remove)}`
  }
}

CounterButton.register();

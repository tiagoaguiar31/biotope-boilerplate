import Component from '@biotope/element';
import MY_BUTTON_EVENTS from './events';
import hyper, { wire, bind } from 'hyperhtml';
import classNames from 'classnames';

  interface CounterButtonProps {
    add?: boolean;
    remove?: boolean;
    title?: string;
    type: string;
    isDisabled?: boolean
  }

export default class CounterButton extends Component< CounterButtonProps > {
  
  public static componentName = 'counter-button';
  protected static attributes = [
    'title',
    'add',
    'remove',
    'isDisabled'
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

  private get button(): HTMLElement {
    return this.shadowRoot.querySelector('.counter-button__btn');
  }

  public connectedCallback() {
    this.button.addEventListener('click', this.onClick);
  }

  public disconnectedCallback() {
    this.button.removeEventListener('click', this.onClick);
  }

  private onClick() {
    this.emit(MY_BUTTON_EVENTS.PRESSED);
  }
  
  renderButton = (title:string, add:boolean, remove:boolean, isDisabled:boolean) => {
    const btnClass = classNames('counter-button__btn ', {
      ['counter-button__btn--add']: add,
      ['counter-button__btn--remove']: remove,
    });
    console.log(isDisabled)
    return wire()`<button type="${this.props.type}" class="${btnClass}" >${title}</button>`
  };

  render() {
    console.log(this.props)
    return this.html`${this.renderButton(this.props.title, this.props.add, this.props.remove, this.props.isDisabled)}`
  }
}


export default ComponentFun;
  
//Для примера сделал реализацию функционального и прототипного стиля
//Оба компонента, phone-filters (функциональный) и phone-catalog (прототипный) 
//реализуют эту функцию и расширяют ее функционал

function ComponentFun( inElem ){

    this._element = inElem.element;
}

ComponentFun.prototype.show = function(){

    this._element.classList.remove('js-hidden');
}

ComponentFun.prototype.hide = function(){

    this._element.classList.add('js-hidden');
}
  
ComponentFun.prototype.on = function( eventName, selector, handler ){

    if (!handler) {
        this._element.addEventListener(eventName, selector);
  
        return;
    }
  
    this._element.addEventListener(eventName, (event) => {
        let delegateTarget = event.target.closest(selector);
  
    if (!delegateTarget || !this._element.contains(delegateTarget)) {
        return;
    }
  
    event.delegateTarget = delegateTarget;
  
        handler(event);
    });
}  
    
ComponentFun.prototype.trigger = function(eventName, detail) {

    let event = new CustomEvent(eventName, { detail });
    this._element.dispatchEvent(event);
}
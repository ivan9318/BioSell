class Navbars extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return['element1','element2','element3','element4','element5','element6','element7','element8'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "element1" && oldVal !== newVal) {
            this.element1 = newVal;
      }
      if (attr === "element2" && oldVal !== newVal) {
        this.element2 = newVal;
  }
  if (attr === "element3" && oldVal !== newVal) {
    this.element3 = newVal;
}
if (attr === "element4" && oldVal !== newVal) {
    this.element4 = newVal;
}
if (attr === "element5" && oldVal !== newVal) {
    this.element5 = newVal;
}
if (attr === "element6" && oldVal !== newVal) {
    this.element6 = newVal;
}
if (attr === "element7" && oldVal !== newVal) {
    this.element7= newVal;
}
if (attr === "element8" && oldVal !== newVal) {
    this.element8= newVal;
}
    }
    getTemplate(){
        const template=document.createElement('template');
        template.innerHTML=`
        <ul>
        <li><a class="active" href="#home">${this.element1}</a></li>
        <li><a class="active" href="#home">${this.element2}</a></li>
        <li><a class="active" href="#home">${this.element3}</a></li>
        <li><a class="active" href="#home">${this.element4}</a></li>
        <li><a class="active" href="#home">${this.element5}</a></li>
        <li><a class="active" href="#home">${this.element6}</a></li>
        <li><a class="active" href="#home">${this.element7}</a></li>
        <li><a class="active" href="#home">${this.element8}</a></li>
      </ul>
      
${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
      ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: blue;
  display:flex;
  flex-direction:row;
        justify-content:center;
        aling-items:center;
}


li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


li a:hover {
  background-color: #111;
}
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }

}
customElements.define('nav-element',Navbars);

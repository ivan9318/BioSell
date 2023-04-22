class Navbars extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return['element1','element2','element3','element4','element5','element6','element7','element8',
        'link1','link2','link3','link4','link5','link6','link7','link8'
    ];
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
if (attr === "link1" && oldVal !== newVal) {
    this.link1= newVal;
}
if (attr === "link2" && oldVal !== newVal) {
    this.link2= newVal;
}
if (attr === "link3" && oldVal !== newVal) {
    this.link3= newVal;
}
if (attr === "link4" && oldVal !== newVal) {
    this.link4= newVal;
}
if (attr === "link5" && oldVal !== newVal) {
    this.link5= newVal;
}
if (attr === "link6" && oldVal !== newVal) {
    this.link6= newVal;
}
if (attr === "link7" && oldVal !== newVal) {
    this.link7= newVal;
}
if (attr === "link8" && oldVal !== newVal) {
    this.link8= newVal;
}
    }
    getTemplate(){
        const template=document.createElement('template');
        template.innerHTML=`
        <ul>
        <li><a class="active" href="${this.link1}">${this.element1}</a></li>
        <li><a class="active" href="${this.link2}">${this.element2}</a></li>
        <li><a class="active" href="${this.link3}">${this.element3}</a></li>
        <li><a class="active" href="${this.link4}">${this.element4}</a></li>
        <li><a class="active" href="${this.link5}">${this.element5}</a></li>
        <li><a class="active" href="${this.link6}">${this.element6}</a></li>
        <li><a class="active" href="${this.link7}">${this.element7}</a></li>
        <li><a class="active" href="${this.link8}">${this.element8}</a></li>
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
        height:50px;
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

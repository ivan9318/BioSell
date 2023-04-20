class CardBios extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return['img','title','description'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img" && oldVal !== newVal) {
            this.img = newVal;
      }
	  if (attr === "title" && oldVal !== newVal) {
		this.title = newVal;
  }
  if (attr === "description" && oldVal !== newVal) {
    this.description = newVal;
}
}
    getTemplate(){
        const template=document.createElement('template');
        template.innerHTML=`
        <div class="card">
  <img src="${this.img}" alt="Avatar" id='imagen'>
  <div class="container">
    <h4><b>${this.title}</b></h4>
    <p>${this.description}</p>
  </div>
</div>  
  ${this.getStyles()}      `;
        return template;
    }
    getStyles(){
        return`
        <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            width:100%;
            height:100%;
            font-size:2rem;
            text-aling:center;
          }

          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          
          .container {
            padding: 2px 16px;
         
          }
          #imagen{
            width:75%;
            heigth:75%;
            margin-radius:75%;

          }
        </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }

}  customElements.define('bios-card',CardBios);
    
class CardPage extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
	static get observedAttributes(){
        return['img','title'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img" && oldVal !== newVal) {
            this.img = newVal;
      }
	  if (attr === "title" && oldVal !== newVal) {
		this.title = newVal;
  }
    }
    getTemplate(){
        const template=document.createElement('template');
        template.innerHTML=`
		<div class=body>
		<div class="showcase">
   <img src="${this.img}" alt="lemurs" class="bg-image" />

   <h1 class="bg-img-title">${this.title}</h1>
</div>
</div>
        ${this.getStyles()}`;
        return template;
    }
    getStyles(){
        return `
        <style>
	.body {
			display: flex;
			align-items: center;
			justify-content: center;
			width:100%;
			height: 400px;
		  }
		  .showcase {
			position: relative;
      width:100%;
			height: 400px;
		  }
	  
		  .bg-image {
         width:100%;
			height: 400px;
			opacity: 0.7;
		  }
	  
		  .bg-img-title {
			position: absolute;
			top: 45px;
			left: 600px;
      font-size:10rem;
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
    
    }
    customElements.define('card-element',CardPage);
    
class Productos extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
      return['img','title','description','producto','shortDes','price'];
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
if (attr === "producto" && oldVal !== newVal) {
  this.producto = newVal;
}
if (attr === "shortDes" && oldVal !== newVal) {
  this.shortDes = newVal;
}
if (attr === "price" && oldVal !== newVal) {
  this.price = newVal;
}

}
    getTemplate(){
        const template=document.createElement('template');
        template.innerHTML=`
        <div class="container">
  <div class="card">
    <div class="card-head">
      <img src="${this.img}" alt="Shoe" class="product-img">
      <div class="product-detail">
        <h2>${this.title}</h2> ${this.description}
      </div>
      <span class="back-text">
              Bios
            </span>
    </div>
    <div class="card-body">
      <div class="product-desc">
        <span class="product-title">
                <b>${this.product}</b>
            
        </span>
        <span class="product-caption">
               ${this.shortDes}
              </span>
        
      </div>
      <div class="product-properties">
        <span class="product-size">
                <h4>Price</h4>
               
              </span>
        <span class="product-price">
                $<b>${this.price}</b>
              </span>
      </div>
    </div>
  </div>
</div>
    ${this.getStyles()}    `
        return template;
    }
    getStyles(){
        return`
        <style>
        .container {
            width: 320px;
            height: 500px;
            margin: 30px auto;
          }
          
          .card {
            border-radius: 25px;
            box-shadow: -11px 11px 1px rgba(0, 0, 0, 0.3);
          }
          
          .card-head {
            position: relative;
            height: 200px;
            background: #87CEFA;
            /* Old browsers */
            background: -moz-linear-gradient(-45deg,#87CEFA 8%, #00BFFF 83%);
            /* FF3.6-15 */
            background: -webkit-linear-gradient(-45deg, #fa782e 8%, #00BFFF 83%);
            /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(135deg,#87CEFA 8%, #00BFFF 83%);
            /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#87CEFA', endColorstr='#00BFFF', GradientType=1);
            /* IE6-9 fallback on horizontal gradient */
            border-radius: 25px 25px 0 0;
          }
          
          .card-logo {
            width: 35px;
            margin: 10px;
          }
          
          .product-img {
            position: absolute;
            top:20px;
            left:120px;
            width:150px;
            height:150px;
            margin-top: -8px;
            margin-left: 30px;
          }
          
          .product-detail {
            padding: 0 20px;
            font-size: 11px;
            color: #fff;
          }
          
          .product-detail h2 {
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 2px;
            padding-bottom: 10px;
            text-transform: uppercase;
          }
          
          .back-text {
            display: inline-block;
            font-size: 125px;
            font-weight: 900;
            margin-left: -7px;
            margin-top: -12px;
            opacity: 0.1;
          }
          
          .card-body {
            height: 200px;
            background: #fff;
            border-radius: 0 0 25px 25px;
          }
          
          .product-title {
            padding: 20px 20px 5px 20px;
            display: block;
            font-size: 17px;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          
          .product-title b {
            font-weight: 900;
            letter-spacing: 0px;
          }
          
          .badge {
            position: relative;
            font-size: 10px;
            font-weight: 300;
            color: #fff;
            background: #11e95b;
            padding: 2px 5px;
            border-radius: 4px;
            top: -2px;
            margin-left: 5px;
          }
          
          .product-caption {
            display: block;
            padding: 0 20px;
            font-size: 10px;
            font-weight: 400;
            text-transform: uppercase;
          }
          
          .product-rating {
            padding: 0 20px;
            font-size: 11px;
          }
          
          .product-rating i.grey {
            color: #acacab;
          }
          
          .product-size h4 {
            font-size: 11px;
            padding: 0 21px;
            margin-top: 15px;
            padding-bottom: 10px;
            text-transform: uppercase;
          }
          
          .ul-size {
            margin-left: 15px;
          }
          
          .ul-size li {
            list-style: none;
            float: left;
            margin-right: 20px;
          }
          
          .ul-size li a {
            display: inline-block;
            text-decoration: none;
            font-size: 11px;
            width: 22px;
            height: 22px;
            border-radius: 100%;
            text-align: center;
            line-height: 23px;
            color: #000;
          }
          
          .ul-size li a.active {
            background: #f35e3d;
            color: #fff;
          }
          
          .product-size:before,
          .product-size:after {
            content: '';
            display: block;
            clear: both;
          }
          
          .product-color h4 {
            font-size: 11px;
            padding: 0 21px;
            margin-top: 20px;
            padding-bottom: 20px;
            text-transform: uppercase;
          }
          
          .ul-color {
            margin-left: 27px;
          }
          
          .ul-color li {
            list-style: none;
            float: left;
            margin-right: 20px;
          }
          
          .ul-color li a {
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 100%;
          }
          
          .ul-color li a.orange {
            background: #f35e3d;
          }
          
          .ul-color li a.green {
            background: #11e95b;
          }
          
          .ul-color li a.yellow {
            background: #ffd414;
          }
          
          .ul-color li a.active:after {
            position: absolute;
            content: '';
            display: inline-block;
            border: 1px solid #f35e3d;
            width: 24px;
            height: 24px;
            border-radius: 100%;
            margin-left: -5px;
            margin-top: -5px;
          }
          
          .product-price {
            position: absolute;
            background: #11e95b;
            padding: 7px 10px;
            text-align: center;
            display: inline-block;
            font-size: 24px;
            font-weight: 200;
           
            color: #fff;
            border-radius: 7px;
            margin-top: -5px;
            margin-left: 65px;
            box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
          }
          
          .product-price b {
            margin-left: 5px;
          }
        
        </style>
        `}
        render(){
            this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        }
        connectedCallback(){
            this.render();
        }
    
    }
    customElements.define('card-product',Productos);
    
# Simple-Modal-Module
##    How to install
```bash
npm install simple-modal-module
```

##    Setup

 ```html
<div className="js-modal-open-btn" js-modal-data="sampleModal">OPEN</div>
<div className="js-modal-target" js-modal-data="sampleModal">
    <button class="js-modal-close-btn" js-modal-data="sampleModal">CLOSE</button>
        <!--- You can make contents here --->
</div>
```
      
```javascript
import ModalModule from "simple-modal-module";
const modal = new ModalModule("sampleModal");
            
// if remove events
modal.destroy();
```
### Parameters
    - 
| key | type | required             | note                      |
|------|--------|----------------------|---------------------------|
| data | string | true                 | use data string by target |
| autoHide | boolean | false(default: `true`) | if use v-if, `false`      |
    
##    インストール方法
```bash
npm install simple-modal-module
```

##    使い方
 ```html
<div className="js-modal-open-btn" js-modal-data="sampleModal">OPEN</div>
<div className="js-modal-target" js-modal-data="sampleModal">
    <button class="js-modal-close-btn" js-modal-data="sampleModal">CLOSE</button>
        <!--- You can make contents here --->
</div>
```

```javascript
import ModalModule from "simple-modal-module";
const modal = new ModalModule("sampleModal");
            
// イベントリスナーを消す場合
modal.destroy();
```

## パラメーター

| key      | type | required                                                | note                                 |
|----------|------|---------------------------------------------------------|--------------------------------------|
| data     | string | true                                                    | ターゲットのdata属性                         |
| autoHide | boolean | false(デフォルト: `true`) | v-ifなどで`display: none`したくない場合`false` |

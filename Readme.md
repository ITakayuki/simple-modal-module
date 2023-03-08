# Simple-Modal-Module

## Language
- [English](#english)  
- [Japanese](#japanese)

<h2 id="english">How to install</h2>
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

```scss
.js-modal-target {
  transition: opacity 0.4s ease;
  &.is-before-open {
    opacity: 0;
  }
  &.is-open {
    opacity: 1;
  }
  &.is-close {
    opacity: 0;
  }
}
```


### status className
1. is-before-open
2. is-open
3. is-close

### Parameters
| key | type | required             | note                      |
|------|--------|----------------------|---------------------------|
| data | string | true                 | use data string by target |
| autoHide | boolean | false(default: `true`) | if use v-if, `false`      |
    
---  

<h2 id="japanese">インストール方法</h2>
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

```scss
.js-modal-target {
  transition: opacity 0.4s ease;
  &.is-before-open {
    opacity: 0;
  }
  &.is-open {
    opacity: 1;
  }
  &.is-close {
    opacity: 0;
  }
}
```

### ステータスを管理するクラス名
1. is-before-open
2. is-open
3. is-close

## パラメーター

| key      | type | required                                                | note                                 |
|----------|------|---------------------------------------------------------|--------------------------------------|
| data     | string | true                                                    | ターゲットのdata属性                         |
| autoHide | boolean | false(デフォルト: `true`) | v-ifなどで`display: none`したくない場合`false` |

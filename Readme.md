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
<div className="js-modal-open" data-modal="sampleModal">OPEN</div>
<div className="js-modal-target" data-modal="sampleModal">
    <button class="js-modal-close" data-modal="sampleModal">CLOSE</button>
        <!--- You can make contents here --->
</div>
```
      
```typescript
// Basic usage
import createModal from "simple-modal-module";
const modal = createModal("sampleModal");
// or when need override options
const modal = createModal("simpleModal", {
    autoHide: false
})

modal.openButtons // open button elements
modal.closeButtons // close button elements
modal.targetNodes // modal target elements
modal.showModal() // open modal
modal.hideModal() // close modal
modal.destroy() // remove evenr listeners.
```

```typescript
// Other APIs
import {enableFixedPage, disableFixedPage} from "simple-modal-module";

// Fixed Page
enableFixedPage();

// Unfixed Page
disableFixedPage();
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


### Options
|         key          |    required    | default        | node                                                                                                       |
|:--------------------:|:--------------:|----------------|------------------------------------------------------------------------------------------------------------|
|        target        |            | js-modal-target | You can specify the class name of the modal to be displayed.                                               |
|  navigation.openEl   | | js-modal-open  | You can specify the class name of the button that opens the modal.                                         |
|  navigation.closeEl  | | js-modal-close | You can specify the class name of the button that closes the modal.                                        |
| hookClass.beforeOpen |  | is-before-open | You can specify the name of the class just before the modal opens.                                         |
|    hookClass.open    |  | is-open        | You can specify the class name when the modal opens.                                                       |
|   hookClass.close    |  | is-close       | You can specify the class name when the modal closes                                                       |
|       autoHide       |                | true           | You can specify whether or not to open a modal when you click `navigation.openEl` or `navigation.closeEl`. |
|      autoFixed       |                | true           | Specifies whether the page is fixed when the modal state is switched.                                      |
|       dataName       |                | data-modal     | You can specify a dataAttribute name that specifies the same modal group.                                  |
    
### return Values
|         key           | node                                            |
|:--------------------:|-------------------------------------------------|
|        showModal        | Function to open the modal.                     |
|        hideModal        | Function to close the modal.                    |
|        destroy        | Function to remove a registered event listener. |
|        openButtons        | Element list of buttons to open the modal.      |
|        closeButtons        | Element list of buttons to close the modal.     |
|        targetNodes        | Modal Elements.                                 |

---  
<br/>
<br/>
<h2 id="japanese">インストール方法</h2>

```bash
npm install simple-modal-module
```

##    使い方
 ```html
<div className="js-modal-open" data-modal="sampleModal">OPEN</div>
<div className="js-modal-target" data-modal="sampleModal">
    <button class="js-modal-close" data-modal="sampleModal">CLOSE</button>
        <!--- You can make contents here --->
</div>
```

```typescript
// Basic usage
import createModal from "simple-modal-module";
const modal = createModal("sampleModal");
// or when need override options
const modal = createModal("simpleModal", {
    autoHide: false
})

modal.openButtons // open button elements
modal.closeButtons // close button elements
modal.targetNodes // modal target elements
modal.showModal() // open modal
modal.hideModal() // close modal
modal.destroy() // remove evenr listeners.
```

```typescript
// Other APIs
import {enableFixedPage, disableFixedPage} from "simple-modal-module";

// Fixed Page
enableFixedPage();

// Unfixed Page
disableFixedPage();
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

## オプション

|         key          |    required    | default         | node                                                             |
|:--------------------:|:--------------:|-----------------|------------------------------------------------------------------|
|        target        |            | js-modal-target | 表示するモーダルのクラス名を指定できます                                             |
|  navigation.openEl   | | js-modal-open   | モーダルを開くボタンのクラス名を指定できます                                           |
|  navigation.closeEl  | | js-modal-close  | モーダルを閉じるボタンのクラス名を指定できます                                          |
| hookClass.beforeOpen |  | is-before-open  | モーダルが開く直前のクラス名を指定できます                                            |
|    hookClass.open    |  | is-open         | モーダルが開らく時のクラス名を指定できます                                            |
|   hookClass.close    |  | is-close        | モーダルが閉じる時のクラス名を指定できます                                            |
|       autoHide       |                | true            | `navigation.openEl`や`navigation.closeEl`をクリックしたときにモーダルを開くかどうかを指定できます |
|      autoFixed       |                | true            | モーダルの状態が切り替わったときに、ページを固定するかを指定します                                |
|       dataName       |                | data-modal      | 同一のモーダルグループを指定するdata属性名を指定できます                                   |

### return値
|         key           | node                 |
|:--------------------:|----------------------|
|        showModal        | モーダルを開く関数            |
|        hideModal        | モーダルを閉じる関数           |
|        destroy        | 登録されたイベントリスナーを解除する関数 |
|        openButtons        | モーダルを開くためのボタンのエレメントリスト    |
|        closeButtons        | モーダルを閉じるためのボタンのエレメントリスト   |
|        targetNodes        | モーダル本体のエレメント         |
# Simple-Modal-Module
- ##    How to install
    - npm install simple-modal-module

- ##    How to use
    - import Modal from "simple-modal-module";
    - if you use this module in React
        -   ```javascript:app.js
            import Modal from  "simple-modal-module";
            .
            .
            .
            componentDidMount(){
                for (let i = 0; i < document.getElementsByClassName("js-modal").length; i++) {
                    this.ModalModule.push(Modal("sampleModal");
                }
            }
            componentWillMount() {
                for(let i = 0; i < this.ModalModule.length; i++ ) {
                    this.ModalModule[i].detroy()
                }
            }
            render(){
                return(){
                    <div className="js-modal-open-btn" js-modal-data="sampleModal">OPEN</div>
                     <div className="js-modal-target" js-modal-data="sampleModal">
                        <button class="js-modal-close-btn" js-modal-data="sampleModal">CLOSE</button>
                        <!--- You can make contents here --->
                    </div>
                }
            ```
    - Parameters
      -   | key | type | note |
          |------|--------|-------|
          | data | string | use data string by target |
          | autoHide | boolean |  if use v-if, `false` |
    
- ##    インストール方法
    - npm install simple-modal-module

- ##    使い方
    - import Modal from "simple-modal-module";
    - Reactの場合
        -   ```javascript:app.js
            import Modal from  "simple-modal-module";
            .
            .
            .
            componentDidMount(){
                for (let i = 0; i < document.getElementsByClassName("js-modal").length; i++) {
                    this.ModalModule.push(Modal("sampleModal");
                }
            }
            componentWillMount() {
                for(let i = 0; i < this.ModalModule.length; i++ ) {
                    this.ModalModule[i].detroy()
                }
            }
            render(){
                return(){
                    <div className="js-modal-open-btn" js-modal-data="sampleModal">OPEN</div>
                     <div className="js-modal-target" js-modal-data="sampleModal">
                        <button class="js-modal-close-btn" js-modal-data="sampleModal">CLOSE</button>
                        <!--- You can make contents here --->
                    </div>
                }
            ```
    - パラメーター
        -   | key | type | note |
             |------ |------|--------|
            | data | string | ターゲットのdata属性 |
            | autoHide | boolean | v-ifなどで`display: none`したくない場合`false` |

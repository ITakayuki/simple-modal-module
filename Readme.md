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
                    this.ModalModule.push(Modal(500, document.getElementsByClassName("js-modal")[i]));
                }
            }
            componentWillMount() {
                for(let i = 0; i < this.ModalModule.length; i++ ) {
                    this.ModalModule[i].detroy()
                }
            }
            render(){
                return(){
                    <div className="js-modal-module">
                        <div className="js-modal-open-btn">OPEN</div>
                        <div className="js-modal-target">
                            <button class="js-modal-close-btn">CLOSE</button>
                            <!--- You can make contents here --->
                        </div>
                    </div>
                }
            ```
    - Parameters
      -   | key | value |
          |------|--------|
          | _time | open/close animation delay |
          | _target | modal target |

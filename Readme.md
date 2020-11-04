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
                Modal();
            }
            render(){
                return(){
                    <div className="m-open-btn">OPEN</div>
                    <div className="plugin-modal-module">
                        <p>You can make contents here</p>
                    </div>
                }
            ```
    - Parameters
        - `ModalModule(ModalNumber, ModalColor, ModalOpacity, CloseButtonDom)`
            - ex)`ModalModule(0,"#ff0000","0.5", "<div class="m-close-btn">CLOSE</div>");`
        - Default Value
            -   | key | value |
                |------|--------|
                | ModalNum | 0 |
                | ModalColor | #000 |
                | ModalOpacity | 0.8 |
                |Close Button DOM | ./assets/img/close.svg |

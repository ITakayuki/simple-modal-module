# Simple-Modal-Module
- ## How to install
    - npm install scroll-module

- ## How to use
    - import Scroller from "scroll-module";
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
            - `ModalModule(ModalColor, ModalOpacity, CloseButtonDom)`
                - ex)`ModalModule("#ff0000","0.5", "<div class="m-close-btn">CLOSE</div>");`
            - Default Value
                -   | key | value |
                    |------|--------|
                    | ModalColor | #000 |
                    | ModalOpacity | 0.8 |
                    |Close Button DOM | ./assets/img/close.svg |

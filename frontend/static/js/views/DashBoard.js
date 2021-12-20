import AbstractView from "./AbstractView";

export default class extends AbsractView {
    constructor(){
        super()
        this.setTitle("Dashboard")
    }
    async getHtml(){
        return `<h1>Welcome Back</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium. Dui nunc mattis enim ut tellus. Nibh cras pulvinar mattis nunc sed blandit libero. Vulputate odio ut enim blandit volutpat. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Congue mauris rhoncus aenean vel elit scelerisque mauris. Tortor consequat id porta nibh venenatis cras sed felis eget. 
            Mauris augue neque gravida in fermentum et. At in tellus integer feugiat. 
        </p>`
    }
}
/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Component<T> {
    props: T,
}


class Component<T> {
    constructor(public props: T) {

    }
}

class Page extends Component<{ title: string }> {
    pageInfo() {
        console.log(this.props.title);
    }
}

export {};
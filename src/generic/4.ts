/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface PageDetails {
  title: string;
}
class Page extends Component<PageDetails> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

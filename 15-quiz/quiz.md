Quiz!

1. What is a React component?
   Independent and Reusable bits of Code.
   A function that returns React elements. (UI)

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

Function name not in PascalCase

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

First parameter should be <Header />

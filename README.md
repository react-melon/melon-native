# melon-native

```shell
git clone https://github.com/react-melon/melon-native.git
npm install
npm start
```

## 添加示例

```shell
cd examples
react-native init example1
cd example1
```

修改 `AppDelegate.m` 的

```
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];

```

为

```
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/examples/example1/index.ios.bundle"];

```
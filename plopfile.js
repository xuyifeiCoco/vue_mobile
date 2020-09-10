module.exports = (plop) => {
  plop.setGenerator("wxfile", {
    // 这里的wxfile是一个自己设定的名字，在执行命令行的时候会用到
    description: "新建文件夹", // 这里是对这个plop的功能描述
    prompts: [
      {
        type: "list", // 问题的类型
        name: "templateType", // 问题对应得到答案的变量名，可以在actions中使用该变量
        message: "您想要创建的模板", // 在命令行中的问题
        choices: ["tableList", "second", "third", "fourth"],
      },
      //   {
      //     type: 'confirm',
      //     name: 'hasBtn',
      //     message: '列表是否有操作按钮',
      //     default: true
      //   },
      //   {
      //     type: 'checkbox',
      //     name: 'functions',
      //     message: '选择需要加入的功能',
      //     choices: [{
      //       name: '新增',
      //       value: 'create',
      //       checked: false
      //     }, {
      //       name: '详情',
      //       value: 'detail',
      //       checked: true
      //     }]
      //   }
      //   {
      //     type: "input", // 问题的类型
      //     name: "fileName", // 问题对应得到答案的变量名，可以在actions中使用该变量
      //     message: "想要创建的模板", // 在命令行中的问题
      //     default: "tableList", // 问题的默认答案
      //   },
    ],
    actions: function(data) {
      var actions = [];
      if (data.templateType == "tableList") {
        actions = actions.concat(
          {
            type: "add",
            path: "src/index.js",
            templateFile: "ceshi.txt",
          },
          {
            type: "add",
            path: "src/index.txt",
            templateFile: "ceshi.txt",
          }
        );
      }
      return actions;
    },
  });
};

const fs = require('fs');
const path = require('path');

// 设置public目录的路径
const publicDirPath = path.join("../../public/docs/user-page");

// 创建一个数组来存储文件名
let fileNames = [];

// 异步读取目录中的文件和文件夹列表
fs.readdir(publicDirPath, (err, files) => {
    if (err) {
        console.error('读取目录时出错:', err);
        process.exit(1); // 退出脚本
    }

    // 使用Promise.all来处理文件的统计信息
    Promise.all(files.map(file => {
        return new Promise((resolve, reject) => {
            fs.stat(path.join(publicDirPath, file), (err, stats) => {
                if (err) {
                    reject(err);
                } else if (stats.isFile()) {
                    fileNames.push(file); // 如果是文件，添加到数组
                    resolve();
                } else {
                    resolve(); // 如果是文件夹，不添加到数组
                }
            });
        });
    })).then(() => {
        // 所有文件的统计信息都已处理完毕
        console.log('public目录下的文件名数组:', fileNames);
        module.exports = fileNames; // 导出文件名数组
    }).catch(err => {
        console.error('处理文件时出错:', err);
    });
});
export default function notExistSample() {
    let name = null;
    console.log('notExist sample 1:', typeof name, name);

    name = '田中';
    if (!name) {
        console.log('notExist sample 2:', 'nullです' + name);
    } else {
        console.log('notExist sample 3:', 'nullではありません' + name);
    }
}
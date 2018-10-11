export default function showToast(mess, icon, that) {
    //$invoke 一个页面或组件对另一个组件中的方法的直接调用，通过传入组件路径找到相应的组件，然后再调用其方法。
    //参数：组件名, 方法名, 参数
    that.$invoke("toast", 'show', {
        title: mess,
        img: `../icons/${icon}.png`
    })
}
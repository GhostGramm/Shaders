import { _decorator, Component, Node, Graphics, effects, EffectAsset, Material, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ShaderTest')
// @executeInEditMode
export class ShaderTest extends Component {

    @property(EffectAsset)
    public testEffect: EffectAsset

    start() {
        this.createMaterial();
    }

    update(deltaTime: number) {
        
    }

    createMaterial(){
        const mat =  new Material();
        mat.initialize({effectAsset : this.testEffect, defines : {USE_TEXTURE: true}});

        this.getComponent(Sprite).material = mat;
    }
}


import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';


@Injectable()
export class ModalsService {

    /**/
    private modals: ModalComponent[] = [];


    /**
     *
     * @param {ModalComponent} modal
     */
    register(modal: ModalComponent): void {
        this.modals.push(modal);
    };


    delete(modal: ModalComponent): void {
        this.modals.forEach((item: ModalComponent, index: number, modals: ModalComponent[]) => {
            if (item.id === modal.id) {
                modals.splice(index, 1);
                console.log('modal deleted');
            }
        });
    };


    /**
     * Returns modal with specified if otherwise null
     * @param {string} modalId
     * @returns {ModalComponent}
     */
    get(modalId: string): ModalComponent | null {
        const findModalById = (modal: ModalComponent) => modal.id === modalId;
        const modal = this.modals.find(findModalById);
        return modal ? modal : null;
    };
}
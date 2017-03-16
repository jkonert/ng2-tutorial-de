/**
 * a lightweight class holding an item and its edit-status
 * @author Johannes Konert
 */
export class EditItem<T> {
    editing: boolean;
    constructor (public item: T) {}
}

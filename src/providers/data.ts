import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
 
@Injectable()
export class DataProvider {
 
  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) { }
 
  getFiles() {
    let ref = this.db.list('Admin/Images');
 
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  } //Get the files from Firebase Storage - good for representing when you need it.
 

  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.jpg`; //Names the files.
 
    return this.afStorage.ref(`files/${newName}`).putString(information);
  } //Upload the files.
 
  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    }
    return this.db.list('Admin/Images').push(toSave);
  } //Put's the uploaded info onto the database side.
 
 
  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;
 
    let ref = this.db.list('files');
 
    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
} //Deletes the file obviously.

//So now I need to do it with an image and not a text file.

/*

Here's the link to the tutorial: https://devdactic.com/store-files-firebase-storage-ionic/

But you could probably integrate it with this tutorial:

https://forum.ionicframework.com/t/ion-input-type-file-full-path/101790/8

And here's another option using ng-fileupload:

https://forum.ionicframework.com/t/pwa-approach-to-uploading-files/72805

Here is another HTML5 Option:

https://gist.github.com/MatiMenich/ac87ee097706bf61b831

And another option using File Transfer

The Data URI is what you need to get from the device.

*/
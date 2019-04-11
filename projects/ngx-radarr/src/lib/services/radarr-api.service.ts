import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as _ from 'lodash';
import { Disk } from '../interfaces/disk';
import { Config } from '../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class RadarrApiService {

  constructor(
    private http: HttpClient,
    @Inject('config') private config: Config
  ) { }

  public getDiskSpace(): Promise<Array<Disk>> {
    return new Promise((resolve, reject) => {
      this.http.get(this.config.url + '/diskspace', {params: this.getAuthParams()}).toPromise().then((disks: Array<Disk>) => {
        for (const disk of disks) {
          disk.usedSpace = disk.totalSpace - disk.freeSpace;
        }
        return resolve(disks);
      }).catch((error) => {
        return reject(error);
      });
    });
  }

  private getAuthParams(): HttpParams {
    const params = new HttpParams();
    params.append('apikey', this.config.key);
    return _.cloneDeep(params);
  }
}

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

/**
 * Encapsulates all image capture operation configuration options.
 */
var CaptureImageOptions = function () {
    // Upper limit of images user can take. Value must be equal or greater than 1.
    this.limit = 1;
    // Image quality (0-100)
    this.quality = 50;
    // Save photos to album/camera roll
    this.saveToPhotoAlbum = true;
    // Width of the saved image, this must be used with height to take effect
    this.targetWidth = 0;
    // Height of the saved image, this must be used with width to take effect
    this.targetHeight = 0;
};

module.exports = CaptureImageOptions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter = 42;
        _this.updateMessage();
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function () {
        this._counter--;
        this.updateMessage();
    };
    HelloWorldModel.prototype.changePageMain = function () {
        this._counter--;
        this.updateMessage();
        frame_1.topmost().navigate({
            moduleName: "pages/main",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    HelloWorldModel.prototype.changePageLogin = function () {
        this._counter--;
        this.updateMessage();
        frame_1.topmost().navigate({
            moduleName: "pages/login",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    HelloWorldModel.prototype.changePageProfile = function () {
        this._counter--;
        this.updateMessage();
        frame_1.topmost().navigate({
            moduleName: "pages/profile",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    HelloWorldModel.prototype.changePageMatches = function () {
        this._counter--;
        this.updateMessage();
        frame_1.topmost().navigate({
            moduleName: "pages/matches",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    HelloWorldModel.prototype.changePageChat = function () {
        this._counter--;
        this.updateMessage();
        frame_1.topmost().navigate({
            moduleName: "pages/chat",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    HelloWorldModel.prototype.changePageMatchProfile = function () {
        this._counter--;
        this.updateMessage();
        frame_1.topmost().navigate({
            moduleName: "pages/matchProfile",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    HelloWorldModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLGtDQUFtQztBQUVuQztJQUFxQyxtQ0FBVTtJQUszQztRQUFBLFlBQ0ksaUJBQU8sU0FLVjtRQUhHLDZCQUE2QjtRQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxzQkFBSSxvQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBYTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQy9DLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNNLCtCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx3Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2YsVUFBVSxFQUFFLFlBQVk7WUFDeEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLHlDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsYUFBYTtZQUN6QixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sMkNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsZUFBZTtZQUMzQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sMkNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsZUFBZTtZQUMzQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sd0NBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNmLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxVQUFVO2dCQUNoQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsTUFBTTthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxnREFBc0IsR0FBN0I7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNmLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHVDQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsK0RBQStELENBQUM7UUFDbkYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBTSxJQUFJLENBQUMsUUFBUSxlQUFZLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFuSEQsQ0FBcUMsdUJBQVUsR0FtSDlDO0FBbkhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLl9jb3VudGVyID0gNDI7XG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9tZXNzYWdlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbWVzc2FnZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICB0aGlzLl9jb3VudGVyLS07XG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQYWdlTWFpbigpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvbWFpblwiLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlUGFnZUxvZ2luKCkge1xuICAgICAgICB0aGlzLl9jb3VudGVyLS07XG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy9sb2dpblwiLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlUGFnZVByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXItLTtcbiAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL3Byb2ZpbGVcIixcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGNoYW5nZVBhZ2VNYXRjaGVzKCkge1xuICAgICAgICB0aGlzLl9jb3VudGVyLS07XG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy9tYXRjaGVzXCIsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VQYWdlQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvY2hhdFwiLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlUGFnZU1hdGNoUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvbWF0Y2hQcm9maWxlXCIsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNZXNzYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5fY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnSG9vcnJhYWF5ISBZb3UgdW5sb2NrZWQgdGhlIE5hdGl2ZVNjcmlwdCBjbGlja2VyIGFjaGlldmVtZW50ISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9jb3VudGVyfSB0YXBzIGxlZnRgO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==